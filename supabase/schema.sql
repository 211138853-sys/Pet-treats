create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  category text not null,
  pet_types text[] not null default array['dog']::text[],
  price numeric(10, 2) not null check (price >= 0),
  monthly_sales integer not null default 0 check (monthly_sales >= 0),
  spec text not null,
  selling text not null,
  ingredients text not null,
  pet_label text not null,
  image_url text not null,
  badge text not null default '新品',
  rating numeric(2, 1) not null default 5.0 check (rating between 1 and 5),
  review_count integer not null default 0 check (review_count >= 0),
  review_quote text not null default '',
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint products_pet_types_check check (pet_types <@ array['cat', 'dog']::text[] and cardinality(pet_types) > 0)
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
before update on public.products
for each row execute function public.set_updated_at();

alter table public.admin_users enable row level security;
alter table public.products enable row level security;

grant select on public.products to anon, authenticated;
grant insert, update, delete on public.products to authenticated;
grant select on public.admin_users to authenticated;

drop policy if exists "Public can read active products" on public.products;
create policy "Public can read active products"
on public.products for select
to anon, authenticated
using (is_active = true);

drop policy if exists "Admins can read all products" on public.products;
create policy "Admins can read all products"
on public.products for select
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

drop policy if exists "Admins can insert products" on public.products;
create policy "Admins can insert products"
on public.products for insert
to authenticated
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

drop policy if exists "Admins can update products" on public.products;
create policy "Admins can update products"
on public.products for update
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())))
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

drop policy if exists "Admins can delete products" on public.products;
create policy "Admins can delete products"
on public.products for delete
to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

drop policy if exists "Users can read own admin membership" on public.admin_users;
create policy "Users can read own admin membership"
on public.admin_users for select
to authenticated
using (user_id = (select auth.uid()));

insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do update set public = excluded.public;

drop policy if exists "Admins can upload product images" on storage.objects;
create policy "Admins can upload product images"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'product-images'
  and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
);

drop policy if exists "Admins can update product images" on storage.objects;
create policy "Admins can update product images"
on storage.objects for update
to authenticated
using (
  bucket_id = 'product-images'
  and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
)
with check (
  bucket_id = 'product-images'
  and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
);

drop policy if exists "Admins can delete product images" on storage.objects;
create policy "Admins can delete product images"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'product-images'
  and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
);
