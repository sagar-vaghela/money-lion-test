import { typedAction } from '../helpers';

export const currentCompoent=(val: any)=>{
  return typedAction("CURRENT_COMPONENT", val);
}
export const changeValues=(val: any)=>{
    return typedAction("CHANGE_VALUE", val);
}









