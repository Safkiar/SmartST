const normalizePhoneNumber = (phone: string) => {
  return phone.replace(/\D/g, "");
};

export default normalizePhoneNumber;
