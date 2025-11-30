import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { getLastText, saveVersion } from "@/lib/storage";

function diffWords(oldText: string, newText: string) {
  const oldWords = oldText.split(/\s+/).filter(Boolean);
  const newWords = newText.split(/\s+/).filter(Boolean);

  return {
    addedWords: newWords.filter((w) => !oldWords.includes(w)),
    removedWords: oldWords.filter((w) => !newWords.includes(w)),
  };
}

export async function POST(req: Request) {
  const { text } = await req.json();
  const oldText = getLastText();

  const { addedWords, removedWords } = diffWords(oldText, text);

  const entry = {
    id: uuid(),
    timestamp: new Date().toISOString(),
    addedWords,
    removedWords,
    oldLength: oldText.length,
    newLength: text.length,
  };

  saveVersion(entry, text);

  return NextResponse.json({ success: true, entry });
}
