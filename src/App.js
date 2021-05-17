import { useState } from 'react';

import './index.css';
import Game from "./component/board/component/game";
import Header from "./shared/component/header/header";
import MainLayout from "./shared/component/MainLayout/Layout";
import UserDetailForm from "./component/userDetail/form";
import postBoardStatus from "./component/board/service/postBoardStatus.dataService";

const App = () => {
    const [username, setUsername] = useState('');
    const [pebbleCount, setpebbleCount] = useState();

    const handleClick = (e) => {
        return postBoardStatus({ username, pebbleCount })
            .then(({ data }) => {
                alert(`Successfully Submitted: ${data.username} ${data.pebbleCount}`);
                setUsername('');
            })
            .catch((e) => alert(`Error Occurred while Submitting: ${e.message}`))
    }

    return (
        <MainLayout classes={`main-layout`} >
            <Header classes={`header`}>
                {!username ?
                    <div>
                        Welcome to play Brain-Vita!
                </div>
                    : <div>
                        <h4>PlayerName:  {username} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PebbleCount: {pebbleCount}</h4>
                    </div>
                }
            </Header>
            {!username ? <UserDetailForm updateUsername={(uname) => setUsername(uname)} />
                :
                <>
                    <Game username={username} setpebbleCount={setpebbleCount} />
                    <button
                        onClick={(e) => handleClick(e)}
                        className={`gameSubmitButton`}> Submit</button>
                </>
            }
        </MainLayout>
    )
};

export default App;
