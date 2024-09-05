const normalizePhoneNumber = (phone: string) => {
  return phone.replace(/([x\-\.\(\)])/g, "");
};

export default normalizePhoneNumber;
