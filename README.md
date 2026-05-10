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
