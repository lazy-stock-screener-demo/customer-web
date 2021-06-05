import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../models/shared/infra/reducerRoot";
import { ISignupReqDTO } from "../../models/customer/use-case/signup/signupDTO";
import { ISigninReqDTO } from "../../models/customer/use-case/signin/signinDTO";
import { readMe } from "../../models/customer/use-case/readMe/readMeUseCase";
import { signin } from "../../models/customer/use-case/signin/signinUseCase";
import { signup } from "../../models/customer/use-case/signup/signupUseCase";

export function useIdentityStateFacade() {
  const identityGlobalState = useSelector(
    (state: IRootState) => state.customerState
  );
  return { identityGlobalState };
}

export function useIdentityAPIFacade() {
  const dispatch = useDispatch();
  const setSignup = (reqDTO: ISignupReqDTO) => dispatch(signup(reqDTO));
  const setSignin = (reqDTO: ISigninReqDTO) => dispatch(signin(reqDTO));
  const setReadMe = () => dispatch(readMe({}));

  return { setSignin, setReadMe, setSignup };
}

// export function useIdentityAPIFacadeSSR(dispatch) {
//   dispatch(readMe({}));
// }
