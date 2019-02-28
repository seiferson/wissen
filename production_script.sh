git remote update > /dev/null
STATUS=$(git status -uno | grep "branch is" | cut -dw -f1 | cut -ds -f2)
if [ "$STATUS" = " up-to-date " ]
then
	echo "Updated" >> /opt/app/wissen/auto.log
else
	git status -uno >> auto.log 
	ps -ef | grep wissen | cut -d ' ' -f 6 | xargs kill -9
	git pull
	nohup mvn clean spring-boot:run &
fi


