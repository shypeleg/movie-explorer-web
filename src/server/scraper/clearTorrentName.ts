export const clearTorrentName = (file: string): string => {
  let newName = file;

  const yearRegex = new RegExp(
    /(^|\s|\.|\()(?:19|20)\d{2}($|\s|\.|\))/,
    'i',
  ).exec(newName);

  if (yearRegex && yearRegex.index > 0) {
    newName = newName.substring(0, yearRegex.index + 5);
  }
  const formatRegex = new RegExp(
    /(^|.)(?:720p|1080p|MP4|aac|x264|brrip|MPEG4|HDTV|bluray)/,
  ).exec(newName);
  if (formatRegex && formatRegex.index > 0) {
    newName = newName.substring(0, formatRegex.index);
  }
  // try to capture season and episode
  // current - (.*?)(?:s|season|EP|\dx)(\d{2})|(E\d{2})

  const results = new RegExp(
    /(.*?)(?:s|season|EP|(\d)x)((\d{2})(E\d{2})|(\d{2}))/,
    'i',
  ).exec(newName);
  if (results && results[1] && results[1].length > 0) {
    //console.log('results', results);
    // console.log('0', results[0]);
    // console.log('1', results[1]);
    // console.log('2', results[2]);
    // console.log('3', results[3]);
    // console.log('4', results[4]);

    newName = results[1];
  }
  return newName.replace(/\./g, ' ').trim();
};
