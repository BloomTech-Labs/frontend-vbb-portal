/**
 *
 * Removes all non digits from a phone number and adds a `+` character to the front
 *
 * @param {string} phoneNumber string with numbers
 * @returns {string} +<ALL DIGITS>
 */
export const formatPhoneNumber = (phoneNumber) => {
  //regex: "1abc2ABC3456]]l" -> "123456"
  const onlyNumbers = phoneNumber.replace(/\D+/gm, '');
  return `+${onlyNumbers}`;
};
