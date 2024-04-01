
const Signup = () => {
    return (
        <main className="w-screen min-h-screen flex items-center justify-center">
            <form className="flex flex-col gap-10 items-center">
                <input placeholder="Enter name"/>
                <input placeholder="Enter email" type="email"/>
                <input placeholder="Create password" type="password"/>
                <button>Create Account</button>
            </form>
        </main>
    )
}

export default Signup;