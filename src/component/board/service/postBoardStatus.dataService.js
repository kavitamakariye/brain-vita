import { post } from "../../../shared/infra/axios";

const url = 'https://reqres.in/api/users';

const postBoardStatus = (boardStatus) => post(url, boardStatus);

export default postBoardStatus;
