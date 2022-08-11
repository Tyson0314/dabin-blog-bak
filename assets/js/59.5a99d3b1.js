(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{687:function(v,_,t){"use strict";t.r(_);var s=t(14),r=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[v._v("#")]),v._v(" 题目描述")]),v._v(" "),t("p",[v._v("假如有一个"),t("strong",[v._v("1G")]),v._v("大小的文件，文件里每一行是一个词，每个词的大小不超过"),t("strong",[v._v("16byte")]),v._v("，要求返回出现频率最高的100个词。内存大小限制是"),t("strong",[v._v("10M")])]),v._v(" "),t("h2",{attrs:{id:"解法1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法1"}},[v._v("#")]),v._v(" 解法1")]),v._v(" "),t("p",[v._v("由于内存限制，我们无法直接将大文件的所有词一次性读到内存中。")]),v._v(" "),t("p",[v._v("可以采用"),t("strong",[v._v("分治策略")]),v._v("，把一个大文件分解成多个小文件，保证每个文件的大小小于10M，进而直接将单个小文件读取到内存中进行处理。")]),v._v(" "),t("p",[t("strong",[v._v("第一步")]),v._v("，首先遍历大文件，对遍历到的每个词x，执行 "),t("code",[v._v("hash(x) % 500")]),v._v("，将结果为i的词存放到文件f(i)中，遍历结束后，可以得到500个小文件，每个小文件的大小为2M左右；")]),v._v(" "),t("p",[t("strong",[v._v("第二步")]),v._v("，接着统计每个小文件中出现频数最高的100个词。可以使用HashMap来实现，其中key为词，value为该词出现的频率。")]),v._v(" "),t("p",[v._v("对于遍历到的词x，如果在map中不存在，则执行 "),t("code",[v._v("map.put(x, 1)。")])]),v._v(" "),t("p",[v._v("若存在，则执行 "),t("code",[v._v("map.put(x, map.get(x)+1)")]),v._v("，将该词出现的次数加1。")]),v._v(" "),t("p",[t("strong",[v._v("第三步")]),v._v("，在第二步中找出了每个文件出现频率最高的100个词之后，通过维护一个"),t("strong",[v._v("小顶堆")]),v._v("来找出所有小文件中出现频率最高的100个词。")]),v._v(" "),t("p",[v._v("具体方法是，遍历第一个文件，把第一个文件中出现频率最高的100个词构建成一个小顶堆。")]),v._v(" "),t("p",[v._v("如果第一个文件中词的个数小于100，可以继续遍历第二个文件，直到构建好有100个结点的小顶堆为止。")]),v._v(" "),t("p",[v._v("继续遍历其他小文件，如果遍历到的词的出现次数大于堆顶上词的出现次数，可以用新遍历到的词替换堆顶的词，然后重新调整这个堆为小顶堆。")]),v._v(" "),t("p",[v._v("当遍历完所有小文件后，这个小顶堆中的词就是出现频率最高的100个词。")]),v._v(" "),t("p",[v._v("总结一下，这种解法的主要思路如下：")]),v._v(" "),t("ol",[t("li",[v._v("采用"),t("strong",[v._v("分治")]),v._v("的思想，进行哈希取余")]),v._v(" "),t("li",[v._v("使用"),t("strong",[v._v("HashMap")]),v._v("统计每个小文件单词出现的次数")]),v._v(" "),t("li",[v._v("使用"),t("strong",[v._v("小顶堆")]),v._v("，遍历步骤2中的小文件，找出词频top100的单词")])]),v._v(" "),t("p",[v._v("但是很容易可以发现问题，在第二步中，如果这个1G的大文件中有某个词词频过高，可能导致小文件大小超过10m。这种情况下该怎么处理呢？")]),v._v(" "),t("p",[v._v("接下来看另外一种解法。")]),v._v(" "),t("h2",{attrs:{id:"解法2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解法2"}},[v._v("#")]),v._v(" 解法2")]),v._v(" "),t("p",[t("strong",[v._v("第一步")]),v._v("：使用多路归并排序对大文件进行排序，这样相同的单词肯定是紧挨着的")]),v._v(" "),t("p",[v._v("多路归并排序对大文件进行排序的步骤如下：")]),v._v(" "),t("p",[v._v("① 将文件按照顺序切分成大小不超过2m的小文件，总共500个小文件")]),v._v(" "),t("p",[v._v("② 使用10MB内存"),t("strong",[v._v("分别")]),v._v("对 500 个小文件中的单词进行"),t("strong",[v._v("排序")])]),v._v(" "),t("p",[v._v("③ 使用一个大小为500大小的堆，对500个小文件进行"),t("strong",[v._v("多路排序")]),v._v("，结果写到一个大文件中")]),v._v(" "),t("p",[v._v("其中第三步，对500个小文件进行多路排序的思路如下：")]),v._v(" "),t("ul",[t("li",[v._v("初始化一个最小堆，大小就是有序小文件的个数500。堆中的每个节点存放每个有序小文件对应的输入流。")]),v._v(" "),t("li",[v._v("按照每个有序文件中的下一行数据对所有文件输入流进行排序，单词小的输入文件流放在堆顶。")]),v._v(" "),t("li",[v._v("拿出堆顶的输入流，并其下一行数据写入到最终排序的文件中，如果拿出来的输入流中还有数据的话，那么将这个输入流再一次添加到栈中。否则说明该文件输入流中没有数据了，那么可以关闭这个流。")]),v._v(" "),t("li",[v._v("循环这个过程，直到所有文件输入流都没有数据为止。")])]),v._v(" "),t("p",[t("strong",[v._v("第二步")]),v._v("：")]),v._v(" "),t("p",[v._v("① 初始化一个100个节点的"),t("strong",[v._v("小顶堆")]),v._v("，用于保存100个出现频率最多的单词")]),v._v(" "),t("p",[v._v("② 遍历整个文件，一个单词一个单词的从文件中取出来，并计数")]),v._v(" "),t("p",[v._v("③ 等到遍历的单词和上一个单词不同的话，那么上一个单词及其频率如果大于堆顶的词的频率，那么放在堆中，否则不放")]),v._v(" "),t("p",[v._v("最终，小顶堆中就是出现频率前100的单词了。")]),v._v(" "),t("p",[v._v("解法2相对解法1，更加严谨，如果某个词词频过高或者整个文件都是同一个词的话，解法1不适用。")]),v._v(" "),t("h2",{attrs:{id:"点关注-不迷路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#点关注-不迷路"}},[v._v("#")]),v._v(" 点关注，不迷路")]),v._v(" "),t("p",[v._v("大彬，"),t("strong",[v._v("非科班出身，自学Java")]),v._v("，校招斩获京东、携程、华为等offer。作为一名转码选手，深感这一路的不易。")]),v._v(" "),t("p",[v._v("希望我的分享能帮助到更多的小伙伴，"),t("strong",[v._v("我踩过的坑你们不要再踩")]),v._v("。想与大彬交流的话，可以到公众号后台获取大彬的微信~")]),v._v(" "),t("p",[v._v("后台回复『 "),t("strong",[v._v("笔记")]),v._v("』即可领取大彬斩获大厂offer的"),t("strong",[v._v("面试笔记")]),v._v("。")]),v._v(" "),t("p",[t("img",{attrs:{src:"http://img.dabin-coder.cn/image/%E5%85%AC%E4%BC%97%E5%8F%B7.jpg",alt:""}})])])}),[],!1,null,null,null);_.default=r.exports}}]);