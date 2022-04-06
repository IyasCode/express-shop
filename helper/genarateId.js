module.exports = (num) => {
  const letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ1234567890";
  
  let newId = "";
  
  for(let i = 0; i <= num; i++) {
    const randomNum = Math.floor(Math.random() * letter.slice("").length);
    
    newId += letter.slice("")[randomNum]
  }
  
  return newId
}
