export const loginErrorHandler = (err) => {
  if (process.env.NEXT_PUBLIC_NODE_ENV !== "production") console.log(err);

  if(err?.data?.message) return err.data.message;

  if (!err?.originalStatus) {
    // isLoading: true until timeout occurs
    return "No Server Response";
  } else if (err?.originalStatus === 400) {
    return "Missing Username or Password";
  } else if (err?.originalStatus === 401) {
    return "Unauthorized";
  } else {
    return "Login Failed";
  }
};


export const errorHandler = (err) => {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== "production") console.log(err);
  
    if(err?.data?.message) return err.data.message;

    if (!err?.originalStatus) {
      // isLoading: true until timeout occurs
      return "No Server Response";
    } else if (err?.originalStatus === 400) {
      return "Missing Username or Password";
    } else if (err?.originalStatus === 401) {
      return "Unauthorized";
    } else {
      return "OpsSomething went wrong!!!";
    }
};


export const signupErrorHandler = (err) => {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== "production") console.log(err);
  
    if(err?.data?.message) return err.data.message;

     if (err?.status === 403) {
      return "User with the same email or phone number exists";
    } else if (err?.originalStatus === 401) {
      return "Unauthorized";
    } else if (err?.status === 409) {
        return "User with the same email or phone number exists";
    } else {
      return "OpsSomething went wrong!!!";
    }
};

export const responseErrorHandler = (error) => {
  console.log(error)
  if(error?.response?.status === 422){
      const errorArrays = error?.response?.data?.errors 
      if (errorArrays.length > 0) {

        let errorKeys = errorArrays.map(item => Object.keys(item)[0] + ": " + Object.values(item)[0] )
        let fields = ""
        errorKeys.map(item=> fields = fields + `${fields === "" ? '' : `,` }`+ item)

        return fields
      }
    }

    let resMessage =
          (error?.response &&
            error?.response?.data &&
            error?.response?.data?.message) ||
            error?.response?.data ||
          error?.message ||
          error.toString();

    if(resMessage === "Request failed with status code 500"){
      resMessage = "Oops Something went wrong Please try again later!!!";
    }

    if (resMessage === 'Network Error') resMessage = "Oops, it seems you do not have internet access!!"
    if(resMessage === "invalid signature") resMessage = "Oops Seems the link has expired";
    

  return resMessage
}

