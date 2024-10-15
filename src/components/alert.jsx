export default function Alert({ errorMessage }) {
    return (
        <>
            {errorMessage && <p className="text-purple-500 font-poppins">
                {errorMessage}
                </p>}
        </>
    );
}
