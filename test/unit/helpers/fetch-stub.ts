
import sinon from 'sinon'

export const fetchStub = (result?: any): sinon.SinonStub => {
    const spyFetch = sinon.stub(window, 'fetch')

    const fetchResponse = new (window as any).Response(result, {
        status: 200,
        headers: { 'Content-type': 'application/json' }
    });
    (window.fetch as any).returns(fetchResponse);

    return spyFetch;
}

