import { useState } from "react";
import Guest from "./Guest";
import User from "./User";

function TicketBooking() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login() {
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
    }

    return (
        <div>

            <h1>Ticket Booking App</h1>

            {isLoggedIn ? (
                <>
                    <User />
                    <br />
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <Guest />
                    <br />
                    <button onClick={login}>Login</button>
                </>
            )}

        </div>
    );
}

export default TicketBooking;