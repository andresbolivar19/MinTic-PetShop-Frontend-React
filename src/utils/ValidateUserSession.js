const validateSession = async () => {

    const response = await APIInvoke.invokePOST(`/auth/test`, {});

    if (response.error !== 'undefined') {
        return 'invalid user';
    }else{
        return response.data.role;
    }
}

export default validateSession;
