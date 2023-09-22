import Link from "next/link";
import React from "react";

const NotFound = () => {
    return (
        <div>
            <div className="text-center">
                <h1>404 Not found</h1>
                <Link href={"/"}>
                    <button>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
