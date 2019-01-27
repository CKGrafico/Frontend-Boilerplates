
import sinon from 'sinon';

export const fetchStub = (result?: any, statusCode = 200): sinon.SinonStub => {
    const spyFetch = sinon.stub(window, 'fetch');

    const fetchResponse = new (window as any).Response(result, {
        status: statusCode,
        headers: { 'Content-type': 'application/json' }
    });
    (window.fetch as any).returns(fetchResponse);

    return spyFetch;
};

