using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Extensions
{
    public static class IQueryableExtensions
    {
        public static IQueryable<ServiceNodeInfoResponse> ApplyServiceNodeFiltering(this IQueryable<ServiceNodeInfoResponse> query, ServiceNodeQuery queryObj)
        {
            if(!string.IsNullOrWhiteSpace(queryObj.Search))
            {
                query = query.Where(sn => sn.Address.Contains(queryObj.Search) || sn.SNodeKey.Contains(queryObj.Search));
            }
            if (queryObj.AtleastOneSpvWallet)
            {
                query = query.Where(sn => sn.SpvWallets.Count > 0);
            }
            if (!string.IsNullOrWhiteSpace(queryObj.SpvWallet))
            {
                query = query.Where(sn => sn.SpvWallets.Contains(queryObj.SpvWallet));
            }

            if (!string.IsNullOrWhiteSpace(queryObj.XCloudService)) 
            {
                query = query.Where(sn => sn.XCloudServices.Contains(queryObj.XCloudService));
            }
            return query;
        }

        public static IQueryable<T> ApplyPaging<T>(this IQueryable<T> query, IQueryObject queryObj)
        {
            if (queryObj.Page <= 0)
                queryObj.Page = 1;

            if (queryObj.PageSize <= 0)
                queryObj.PageSize = 10;

            return query.Skip((queryObj.Page - 1) * queryObj.PageSize).Take(queryObj.PageSize);
        }
    }
}
