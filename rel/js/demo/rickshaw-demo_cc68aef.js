$(function(){var e=new Rickshaw.Graph({element:document.querySelector("#chart"),series:[{color:"#1ab394",data:[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}]}]});e.render();var r=new Rickshaw.Graph({element:document.querySelector("#rickshaw_multi"),renderer:"area",stroke:!0,series:[{data:[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:20},{x:4,y:16}],color:"#1ab394",stroke:"#17997f"},{data:[{x:0,y:22},{x:1,y:25},{x:2,y:38},{x:3,y:44},{x:4,y:46}],color:"#eeeeee",stroke:"#d7d7d7"}]});r.renderer.unstack=!0,r.render();var a=new Rickshaw.Graph({element:document.querySelector("#rickshaw_line"),renderer:"line",series:[{data:[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}],color:"#1ab394"}]});a.render();var y=new Rickshaw.Graph({element:document.querySelector("#rickshaw_multi_line"),renderer:"line",series:[{data:[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}],color:"#1ab394"},{data:[{x:0,y:20},{x:1,y:24},{x:2,y:19},{x:3,y:15},{x:4,y:16}],color:"#d7d7d7"}]});y.render();var x=new Rickshaw.Graph({element:document.querySelector("#rickshaw_bars"),renderer:"bar",series:[{data:[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}],color:"#1ab394"}]});x.render();var t=new Rickshaw.Graph({element:document.querySelector("#rickshaw_bars_stacked"),renderer:"bar",series:[{data:[{x:0,y:40},{x:1,y:49},{x:2,y:38},{x:3,y:30},{x:4,y:32}],color:"#1ab394"},{data:[{x:0,y:20},{x:1,y:24},{x:2,y:19},{x:3,y:15},{x:4,y:16}],color:"#d7d7d7"}]});t.render();var c=new Rickshaw.Graph({element:document.querySelector("#rickshaw_scatterplot"),renderer:"scatterplot",stroke:!0,padding:{top:.05,left:.05,right:.05},series:[{data:[{x:0,y:15},{x:1,y:18},{x:2,y:10},{x:3,y:12},{x:4,y:15},{x:5,y:24},{x:6,y:28},{x:7,y:31},{x:8,y:22},{x:9,y:18},{x:10,y:16}],color:"#1ab394"}]});c.render()});