import FotoPerfil from '../../../../assets/img/imagemPerfil.png'
import FotoCapa from '../../../../assets/img/imagemCapa.png'
import '../../telaPerfil.css'
import { useState } from 'react';
import api from '../../../../config/api.js';
import { useParams } from 'react-router-dom';

export default function FotosPerfilECapa() {

    const [user, setUser] = useState[{fotoPerfil: FotoPerfil, fotoCapa: FotoCapa}]

    const token = localStorage.getItem('token');

    const { id } = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const dado = await api.get(`/buscar/${id}`, {headers: {authorization: `bearer ${token}`}});

            const req = await dado.data;

            if (req) {
                if(req.fotoCapa || req.fotoPerfil === null){
                    return;
                } else{
                    setUser({...user, fotoCapa: req.fotoCapa, fotoPerfil: req.fotoPerfil});
                }
            }

        } catch (error) {
            console.log(error);
            alert('Deu erro.');
        }
    };

    handleSubmit();

    


    return (
        <div className="fotosPerfilECapa">
            <img src={user.fotoPerfil} alt="" className="imgCapa" />
            <img src={user.fotoCapa} alt="" className="imgPerfil" />
        </div>
    )
}