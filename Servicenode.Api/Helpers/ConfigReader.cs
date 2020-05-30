using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Servicenode.Api.Helpers
{
    public class ConfigReader
    {
        private Hashtable keyPairs = new Hashtable();

        private struct SectionPair
        {
            public String Section;
            public String Key;
        }

        public ConfigReader(string config)
        {
            String currentRoot = null;
            String strLine = null;
            String[] keyPair = null;

            string[] lines = config.Split(
                new[] { "\r\n", "\r", "\n" },
                StringSplitOptions.None
            );

            foreach (var line in lines)
            {
                strLine = line.Trim();

                if(strLine != "")
                {
                    if(strLine.StartsWith("[") && strLine.EndsWith("]"))
                    {
                        currentRoot = strLine.Substring(1, strLine.Length - 2);
                    }
                    else
                    {
                        keyPair = strLine.Split(new char[] { '=' }, 2);

                        SectionPair sectionPair;
                        String value = null;

                        if (currentRoot == null)
                            currentRoot = "ROOT";

                        sectionPair.Section = currentRoot;
                        sectionPair.Key = keyPair[0];

                        if (keyPair.Length > 1)
                            value = keyPair[1];

                        keyPairs.Add(sectionPair, value);
                    }
                }
            }
        }

        public String GetSetting(String sectionName, String settingName)
        {
            SectionPair sectionPair;
            sectionPair.Section = sectionName;
            sectionPair.Key = settingName;

            return (String)keyPairs[sectionPair];
        }

        /// <summary>
        /// Enumerates all lines for given section.
        /// </summary>
        /// <param name="sectionName">Section to enum.</param>
        public String[] EnumSection(String sectionName)
        {
            ArrayList tmpArray = new ArrayList();

            foreach (SectionPair pair in keyPairs.Keys)
            {
                if (pair.Section == sectionName)
                    tmpArray.Add(pair.Key);
            }

            return (String[])tmpArray.ToArray(typeof(String));
        }
    }
}
