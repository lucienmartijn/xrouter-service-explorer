using CloudChainsSPVLib.RPC.Specifications;

namespace CloudChainsSPVLib.RPC.Connector
{
    public interface IRpcConnector
    {
        T MakeRequest<T>(RpcMethods method, params object[] parameters);
    }
}
