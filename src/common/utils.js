export const getAccessToken = async () => {
    const Token = await localStorage.getItem('accessToken');
    const Token1 = Token?.replace('"', '');
    const accessToken = Token1?.replace('"', '');
    console.log('@ACCESS TOKEN FROM LOCAL STORAGE', accessToken);
    return accessToken;
  };