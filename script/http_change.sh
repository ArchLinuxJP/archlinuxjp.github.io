#!/bin/zsh

d=${0:a:h:h}/themes
cd $d
t=`grep -R 'http://' . | cut -d : -f 1 | grep -v "Binary file"`
for (( i=1;i<=$i;i++ ))
do
	f=`echo "$t"|awk "NR==$i"`
	$f
	sed -i "" -e 's#http://##g' $f
done
