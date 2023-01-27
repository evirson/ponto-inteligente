export class lancamento {
    constructor(
        public data: string,
        public tipo: string,
        public localizacao: string,
        public funcionarioId: string,
        public id?: string
    ) { }
}