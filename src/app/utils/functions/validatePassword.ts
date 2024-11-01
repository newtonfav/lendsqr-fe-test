const isPassword = (password: string): boolean => {
  const length = /^.{8,32}/;
  return length.test(password);
};
export default isPassword;
