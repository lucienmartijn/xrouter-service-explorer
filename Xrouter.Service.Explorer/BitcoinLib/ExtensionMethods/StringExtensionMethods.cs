// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

using System;
using System.Linq;
using BitcoinLib.Services.Coins.Base;

namespace BitcoinLib.ExtensionMethods
{
    public static class StringExtensionMethods
    {
        public static string RemoveWhitespace(this string input)
        {
            return new string(input.ToCharArray()
                .Where(c => !Char.IsWhiteSpace(c))
                .ToArray());
        }
    }
}