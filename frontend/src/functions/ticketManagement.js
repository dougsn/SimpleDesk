import { toast } from "react-toastify";
import { api } from "../service/api";
import { getToken } from "./localstorage";
const baseUrl = "/ticket";

export const getTickets = async () => {
  try {
    const request = await api.get(`${baseUrl}`);

    if (request.status === 200) {
      return request.data;
    }
  } catch {
    toast.error("Erro na comunicação com a API. Tente novamente.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

export const addTicket = async (data, imgUrl, userId) => {
  const newTicket = {
    title: data.title.trim(),
    description: data.description ? data.description.trim() : '',
    urlPhoto: imgUrl ? imgUrl.trim() : '',
    user: {
      id: parseInt(userId),
    },
    equipment: {
      id: parseInt(data.idEquipment),
    },
  };

  try {
    const request = await api.post(`${baseUrl}`, newTicket, {
      headers:{
        Authorization: 'Bearer ' + getToken()
      }
    });

    if (request.status === 201) {
      toast.success("Chamado criado com sucesso", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return true;
    }
  } catch {
    toast.error("Valide os dados inseridos.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return false;
  }
};

export const getTicket = async (id) => {
  try {
    const request = await api.get(`${baseUrl}/${id}`);

    if (request.status === 200) {
      return request.data;
    }
  } catch {
    toast.error("Erro na comunicação com a API. Tente novamente.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};

export const deleteTicket = async (id) => {
  try {
    const request = await api.delete(`${baseUrl}/${id}`);

    if (request.status === 200) {
      return true;
    }
  } catch {
    return false;
  }
};

export const updateTicket = async (id, data) => {
  const updateTicketData = {
    id: parseInt(id),
    title: data.title.trim(),
    description: data.description ? data.description.trim() : null,
    urlPhoto: data.urlPhoto ? data.urlPhoto.trim() : null,
    user: {
      id: parseInt(data.idSector),
    },
    equipment: {
      id: parseInt(data.idEquipmentType),
    },
  };

  try {
    const request = await api.put(`${baseUrl}`, updateTicketData);
    console.log(request.status);

    if (request.status === 200) {
      toast.success("Chamado atualizado com sucesso", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return true;
    }
  } catch {
    toast.error("Valide os dados inseridos.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return false;
  }
};
