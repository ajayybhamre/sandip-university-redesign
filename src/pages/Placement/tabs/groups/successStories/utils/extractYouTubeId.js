// Accepts a full YouTube URL (watch, youtu.be, embed, shorts) or a bare video ID,
// and returns just the 11-character video ID.

const extractYouTubeId = (input) => {

  if (!input) return null;

  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match) return match[1];
  }

  // Already a bare 11-char video ID
  if (/^[\w-]{11}$/.test(input)) return input;

  return null;

};

export default extractYouTubeId;
