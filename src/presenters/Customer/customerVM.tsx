import React, {
  useReducer,
  createContext,
  ReactElement,
  useEffect,
} from "react";
import { LoadingOrChildren } from "../shared/loadingOrChildren";
import { ISigninReqDTO } from "../../models/customer/use-case/signin/signinDTO";
import {
  useIdentityAPIFacade,
  useIdentityStateFacade,
  // useIdentityAPIFacadeSSR,
} from "./customerAPIFacade";
import createLocalReducer from "./customerLocalReducer";
import { initLocalState, IInitLocalState } from "./customerLocalReducer";

const localReducer = createLocalReducer();
export const Identity = createContext<IInitLocalState<any>>({
  ...initLocalState,
});

// Page Level Context a.k.a. Page Level State Provider
export function WithIdentityCtx({ ...props }): Function {
  return (PageContainer): Function => {
    return (): ReactElement => {
      const [localState, dispatch] = useReducer(localReducer, initLocalState);
      return (
        <Identity.Provider value={{ ...localState, dispatch }}>
          <PageContainer {...props} />
        </Identity.Provider>
      );
    };
  };
}

export function WithIdentityState({ ...props }): Function {
  return (UILogicContainer): Function => {
    return (): ReactElement => {
      const { identityGlobalState } = useIdentityStateFacade();

      const { isReadingMe, error } = identityGlobalState;
      return LoadingOrChildren({
        isLoading: isReadingMe,
        errMsg: error,
        children: () => (
          <UILogicContainer {...props} {...identityGlobalState} />
        ),
      });
    };
  };
}

export function WithIdentityAPIHandler({ ...props }): Function {
  return (UILogicContainer): Function => {
    return (): ReactElement => {
      const { setSignin, setReadMe, setSignup } = useIdentityAPIFacade();

      function handleSignup(reqDTO: ISigninReqDTO) {
        setSignup(reqDTO);
      }
      function handleSignin(reqDTO: ISigninReqDTO) {
        setSignin(reqDTO);
      }
      function asyncReadMe() {
        setReadMe();
      }

      return (
        <UILogicContainer
          {...props}
          handleSignin={handleSignin}
          handleSignup={handleSignup}
          asyncReadMe={asyncReadMe}
        ></UILogicContainer>
      );
    };
  };
}

export const useAuth = () => {
  const { setReadMe } = useIdentityAPIFacade();
  useEffect(() => {
    setReadMe();
  }, []);
};

// export const useAuthSSR = ({ dispatch }) => {
//   useIdentityAPIFacadeSSR(dispatch);
// };
