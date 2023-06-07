import { createClient } from "@supabase/supabase-js";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,

    process.env.NEXT_PUBLIC_SUPABASE_ANON_URL!
  );

  const { data } = await supabase.from("todos").select();

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const title = request.json()
  
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,

    process.env.NEXT_PUBLIC_SUPABASE_ANON_URL!
  );

  const { data } = await supabase.from("todos").insert({ title });

  return NextResponse.json(data);
}
