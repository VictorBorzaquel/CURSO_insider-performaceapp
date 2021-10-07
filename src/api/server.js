module.exports = () => {
  const data = { friends: [] };

  for (let i = 0; i < 500; i++) {
    const length = i + 1;

    data.friends.push({
      id: length,
      likes: Math.floor(Math.random() * 1000),
      name: `Amigo ${length}`,
    });
  }
  return data;
};
