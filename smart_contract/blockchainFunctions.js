import { Venture } from "./contracts"
import web3 from "./web3";

const getCurrentAccount = async () => (await web3.eth.getAccounts())[0];

export async function invest({ ventureAddress, amount }) {
    const ventureContract = Venture(ventureAddress);
    await ventureContract.methods.invest().send({
        from: await getCurrentAccount(),
        value: amount,
    });
}

export async function withdraw({ amount, ventureAddress }) {
    const ventureContract = Venture(ventureAddress);
    await ventureContract.methods.withdraw().send({
        from: await getCurrentAccount(),
    })
}

export async function concludeVentureFunding({ ventureAddress }) {
    const ventureContract = Venture(ventureAddress);
    await ventureContract.methods.concludeVentureFunding().send({
        from: await getCurrentAccount(),
    })
}