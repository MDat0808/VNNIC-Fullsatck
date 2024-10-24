export function generateSlugUnique(text: string): string {
  return (
    text
      .toLowerCase() // Convert to lowercase
      .normalize('NFD') // Normalize the string to separate diacritics from characters
      .replace(/ơ/g, 'o') // Replace ơ with o
      .replace(/Ư/g, 'U') // Replace Ư with U
      .replace(/Ớ/g, 'O') // Replace Ớ with O
      .replace(/Ả/g, 'A') // Replace Ả with A
      .replace(/Ẩ/g, 'A') // Replace Ẩ with A
      .replace(/Ẳ/g, 'A') // Replace Ẳ with A
      .replace(/Ẵ/g, 'A') // Replace Ẵ with A
      .replace(/Ặ/g, 'A') // Replace Ặ with A
      .replace(/đ/g, 'd') // Replace đ with d
      .replace(/Đ/g, 'D') // Replace Đ with D
      .replace(/Ẹ/g, 'E') // Replace Ẹ with E
      .replace(/Ẻ/g, 'E') // Replace Ẻ with E
      .replace(/Ẽ/g, 'E') // Replace Ẽ with E
      .replace(/Ế/g, 'E') // Replace Ế with E
      .replace(/Ề/g, 'E') // Replace Ề with E
      .replace(/Ể/g, 'E') // Replace Ể with E
      .replace(/Ễ/g, 'E') // Replace Ễ with E
      .replace(/Ệ/g, 'E') // Replace Ệ with E
      .trim() // Remove whitespace from both ends
      .replace(/[\s]+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters except hyphens
      .replace(/\-\-+/g, '-') // Replace multiple hyphens with a single hyphen
      .replace(/^-+/, '') // Remove leading hyphen
      .replace(/-+$/, '') + // Remove trailing hyphen
    '-' +
    Date.now()
  ); // Append current timestamp
}
