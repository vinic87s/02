function status(request, response) {
  response.status(200).json({ chave: "teste de status ÇÇÇÇ hmm" });
}

export default status;
