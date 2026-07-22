function getHeyeSupabaseClient() {
  const config = window.HEYE_SUPABASE_CONFIG || {};
  const isConfigured = config.url
    && config.anonKey
    && !config.url.startsWith("YOUR_")
    && !config.anonKey.startsWith("YOUR_");

  if (!isConfigured || !window.supabase) return null;
  if (!window.heyeSupabaseClient) {
    window.heyeSupabaseClient = window.supabase.createClient(config.url, config.anonKey);
  }
  return window.heyeSupabaseClient;
}

window.getHeyeSupabaseClient = getHeyeSupabaseClient;
