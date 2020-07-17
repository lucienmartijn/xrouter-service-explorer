using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudChainsSpvWallet.Api.Manager
{
    public class AddressManager
    {
        Hashtable InUseAddresses;

        public AddressManager()
        {
            InUseAddresses = new Hashtable();
        }

        public void AddAddress(string coin, string address)
        {
            //InUseAddresses
        }
    }
}
