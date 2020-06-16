import responseList from "./responseList.json";

export default function filterEmoji(searchText, maxResults) {
  if (searchText.length === 0) {
    return [];
  }
  let x = responseList
    .filter(response => {
      if (response.text.toLowerCase().includes(searchText.toLowerCase().replace(/\W/g, ''))
          || response.tags.map(x => x.toLowerCase().replace(/\W/g, ''))
              .filter(tag => tag.includes(searchText.toLowerCase().replace(/\W/g, ''))).length > 0) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
    console.log(x);
    return x;
}