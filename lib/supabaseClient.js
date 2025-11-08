import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// If credentials are missing (e.g. local dev without env), export a safe mock
// so the app doesn't crash. This allows the UI to render with empty data.
const emptyResponse = { data: [], error: null };
const mockClient = {
	from: () => ({
		// supports: supabase.from('votes').select('*').eq('token', token)
		select: () => ({
			eq: async () => emptyResponse
		})
	})
};

export const supabase = (supabaseUrl && supabaseAnonKey)
	? createClient(supabaseUrl, supabaseAnonKey)
	: mockClient;
