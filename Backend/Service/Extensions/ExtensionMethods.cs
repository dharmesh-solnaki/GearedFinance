using AutoMapper;
using AutoMapper.Configuration.Conventions;
using System.Runtime.CompilerServices;

namespace Geared_Finance_API
{
    public class ExtensionMethods
    {

    }
    public static class MapperHelper
    {

        public static TDest MapTo<TDest>(this AutoMapper.IMapper mapper ,object source)
        {
          return mapper.Map<TDest>(source);

        }
        public static IEnumerable<TDest> MapToList<TDest >(this AutoMapper.IMapper mapper , IEnumerable<object> source)
        {
            return mapper.Map<IEnumerable<TDest>>(source);
        }
    }
}
