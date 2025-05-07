export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { descricao } = req.body;

        if (!descricao) {
            res.status(400).json({ error: 'A descrição é obrigatória.' });
            return;
        }

        // Simula a geração de uma logo (você pode conectar a uma API real aqui)
        const fakeLogoUrl = `https://via.placeholder.com/300x150.png?text=${encodeURIComponent(descricao)}`;
        
        res.status(200).json({ url: fakeLogoUrl });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
    }
}
