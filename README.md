Template

-cmd

-ssh -i awskey.pem ubuntu@IP

-ubuntu exit

-scp -i awskey.pem -r "template_file_path/*"   ubuntu@IP:/tmp

-ssh -i awskey.pem ubuntu@IP

ubuntu:
-cd /tmp
-ls

-sudo apt install apache2 -y
-sudo sytemctl start apache2
-sudo systemctl eneble apache2
-apache2 -v


-sudo cp -r /tmp/* /var/www/html
-cd /var/www/html
-ls
-sudo systemctl restart apache2





******* VM *******

Download - https://drive.google.com/drive/u/0/folders/1me_nJJh0fvdDOXX3ew2jzGQpoP7f_iFt 


=> VM 1

ls
touch sample.txt
nano sample.txt


=> now go to VM2

ifconfig - get inet ip

=> go VM1


scp sample.txt vagrant@ip:/home/vagrant


=> go VM2

ls
cat sample.txt
