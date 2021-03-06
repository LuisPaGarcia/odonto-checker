function getFilesToAnalize(fileArray: string[]): string[] {
  const todayMonthNumber = new Date().getDate();

  return fileArray.filter((filename) => {
    const todayDayOfTheMonth = todayMonthNumber + ".";
    const tomorrowDayOfTheMonth = todayMonthNumber + 1 + ".";
    return (
      filename.includes(todayDayOfTheMonth) ||
      filename.includes(tomorrowDayOfTheMonth)
    );
  });
}

export default getFilesToAnalize;
