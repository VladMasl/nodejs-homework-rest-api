const Jimp = require("jimp");

const convertingAvatars = async ({ tmpDir }) => {
  //* Знаходимо зображення
  const image = await Jimp.read(tmpDir);

  //* Задаємо розмір та зберігаємо результат
  await image.cover(250, 250).writeAsync(tmpDir);
};

module.exports = convertingAvatars;
