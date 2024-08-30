import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate(); 

    return (
        <div className="text-center mt-5">
            <p>404 Error: Ti sei perso?</p>
            <Button onClick={() => navigate('/')}>Torna alla Home</Button>
        </div>
    );
};

export default NotFoundPage;