import axios from "axios";

const ConexaoApi = class {

  constructor (url) {
    this.api = axios.create({
      baseURL: url
    })
  }

  async BuscaDados(QtdPorPaginas) {
    try {
      const { data } = await this.api.get(QtdPorPaginas)
      return data
    } catch (error) {
      return error.response.data
    }
  }

  async BuscaImg(URL) {
    try {
      const { data } = await axios.get(URL)
      return data
    } catch (error) {
      return error.response.data
    }
  }

  async BuscaPorNome(URL) {
    try {
      const { data } = await axios.get(URL)
      return data
    } catch (error) {
      return error.response.data
    }
  }

  async BuscaLocal(URL) {
    try {
      const { data } = await axios.get(URL)
      return data
    } catch (error) {
      return error.response.data
    }
  }



}

export default ConexaoApi