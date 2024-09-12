<template>
  <div>
    <MasonryContainer
      style="max-width: 900px; margin: auto;"
      :item-width="250"
    >
      <!-- dasd -->
      <MasonryItem
        v-for="(item, index) in list"
        :key="item.txt"
        :col-span="index === 0 ? 2 : 1"
      >
        <div
          style="box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);"
        >
          <img
            :src="`https://www.dmoe.cc/random.php?${index}`"
            style="width: 100%; aspect-ratio: 4/3;"
          >
          <div style="padding: 4px 0">
            <div style="padding: 4px 8px;">
              {{ item.type }}
            </div>
            <div style="padding: 4px 8px;">
              {{ item.txt }}
            </div>
          </div>
        </div>
      </MasonryItem>
    </MasonryContainer>
  </div>
</template>

<script setup>
const list = [
  {
    type: '其他类型',
    txt: '所谓道别啊，单方面是不作数的。——《未闻花名》',
  },
  {
    type: '动漫语录',
    txt: '突然之间，我还想再在这个世上多活几天。——L·Lawliet《死亡笔记》',
  },
  {
    type: '动漫语录',
    txt: '记忆在时间中尘封，往事如流水匆匆逝去，生命花瓣在冬夜飘零，犹如停留在叶面的晨露。——《秦时明月》',
  },
  {
    type: '动漫语录',
    txt: '人的欲望，就如同高山滚石一般，一旦开始，就再也停不下来了。——泰雷《超兽武装》',
  },
  {
    type: '动漫语录',
    txt: '世界上不存在无法获得幸福的人，你之所以不幸，只是因为你不希望自己变得幸福而已！——阿良良木历《终物语》',
  },
  {
    type: '动漫语录',
    txt: '梦总是有会醒来的时候，不会醒的梦总有一天会变成悲伤。——小满《AIR》',
  },
  {
    type: '名人名言',
    txt: '使生命变得麻木，这决不是享受。——雨果',
  },
  {
    type: '动漫语录',
    txt: '每一个人，只要活着，就会不停的失去。——冈崎汐《Clannad》',
  },
  {
    type: '其他类型',
    txt: '不忘初心，方得始终。——【凉初】',
  },
  {
    type: '动漫语录',
    txt: '坚强不是结果，是朝某个目标努力的过程！——朝田诗乃《刀剑神域2》',
  },
]
</script>
