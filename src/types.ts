export interface MsgProp {
  text: string;
  isSelf: boolean;
}

export interface MsgInpProp {
  addMsg: (msg: MsgProp) => void;
}
